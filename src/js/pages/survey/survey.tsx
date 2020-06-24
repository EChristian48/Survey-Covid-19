import * as React from 'react'

// Custom Components
import { Question } from './question'
import { UserDataForm } from './user-data-form'

// Questions Data
import { Answer } from '../../data/questions'
import { SurveyResult, getDBInstance, Resiko } from '../../data/database'

const LAST_QUESTION_KEY = 'last-question'
const ANSWERS_KEY = 'answers'
const NAME_KEY = 'name'

type SurveyState = {
  lastQuestion: number
  answers: Answer[]
  name: string
}

class Survey extends React.Component<{}, SurveyState> {
  state: SurveyState = {
    lastQuestion: 1,
    answers: [],
    name: '',
  }

  initialState = { ...this.state }
  modal: M.Modal
  constructor(props: {}) {
    super(props)
  }

  componentDidMount() {
    const lastState: SurveyState = {
      lastQuestion:
        Number.parseInt(localStorage.getItem(LAST_QUESTION_KEY)) || 1,
      answers: JSON.parse(localStorage.getItem(ANSWERS_KEY)) || [],
      name: localStorage.getItem(NAME_KEY) || '',
    }

    localStorage.setItem(LAST_QUESTION_KEY, lastState.lastQuestion.toString())
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(lastState.answers))
    localStorage.setItem(NAME_KEY, lastState.name)

    this.setState(lastState)

    const elem = document.querySelector('.modal')
    this.modal = M.Modal.init(elem, {
      onCloseEnd: () => {
        location.hash = '/saved'
        this.clearState()
      },
    })
  }

  shouldComponentUpdate(_: {}, nextState: SurveyState) {
    if (this.state.lastQuestion === 21 && nextState.lastQuestion === 1)
      return false
    return true
  }

  componentDidUpdate() {
    if (this.state.lastQuestion > 21) {
      // TODO: Add Database Operation
      const doneState: SurveyState = { ...this.state, lastQuestion: 21 }
      this.setState(doneState)

      const jawabanYa = this.state.answers.filter(
        (value) => value.answer || null
      ).length
      let resiko: Resiko
      if (jawabanYa >= 15) {
        resiko = 'Tinggi'
      } else if (jawabanYa >= 8) {
        resiko = 'Sedang'
      } else {
        resiko = 'Rendah'
      }

      const result: SurveyResult = {
        name: this.state.name,
        answers: this.state.answers,
        result: resiko,
      }

      getDBInstance()
        .then((db) => {
          return db.add('userResult', result)
        })
        .then(() => {
          this.modal.open()
          localStorage.clear()
        })
    }
  }

  jawab = (jawaban: boolean) => {
    this.setState((state) => {
      const answers = this.state.answers.slice()
      answers.push({
        questionIndex: state.lastQuestion,
        answer: jawaban,
      })

      const newState: SurveyState = {
        lastQuestion: state.lastQuestion + 1,
        answers: answers,
        name: state.name,
      }

      localStorage.setItem(LAST_QUESTION_KEY, newState.lastQuestion.toString())
      localStorage.setItem(ANSWERS_KEY, JSON.stringify(newState.answers))

      return newState
    })
  }

  saveNama = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const NameRegex = /^[a-z ,.'-]+$/i
    const namaLengkap: HTMLInputElement = document.querySelector('#namaLengkap')
    if (!namaLengkap.value.match(NameRegex)) {
      this.modal.open()
      return
    }

    this.setState((state) => {
      const newState = { ...state }
      newState.name = namaLengkap.value

      localStorage.setItem(NAME_KEY, newState.name)

      return newState
    })
  }

  clearState = () => {
    this.setState(this.initialState)
  }

  render() {
    let content: JSX.Element
    let modalMessage: string

    if (!this.state.name) {
      modalMessage = 'Nama kamu ngaco!'
      content = <UserDataForm onSubmitHandler={this.saveNama} />
    } else {
      modalMessage = 'Hore beres!'
      content = (
        <Question
          lastQuestion={this.state.lastQuestion}
          onClickHandler={this.jawab}
        />
      )
    }

    return (
      <>
        <div className='modal'>
          <div className='modal-content'>{modalMessage}</div>
        </div>
        {content}
      </>
    )
  }
}

export { Survey }
