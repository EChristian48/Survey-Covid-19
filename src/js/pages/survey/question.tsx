import * as React from 'react'

// Questions Data
import { questions } from '../../data/questions'

import { Title } from '../../components/title'

type QuestionProps = {
  lastQuestion: number
  onClickHandler: (jawaban: boolean) => void
}

function Question(props: QuestionProps) {
  return (
    <div className='container'>
      <div className='row'>
        <Title>Soal No. {props.lastQuestion}</Title>

        <div className='col s12'>
          <p className='flow-text center-align'>
            {questions[props.lastQuestion - 1]}
          </p>
        </div>
        <form>
          <div className='col s12 m6 center-align margin-y-1'>
            {/* <div className='flow-text'>Tadi kamu milih ini</div> */}
            <a className='btn-large' onClick={() => props.onClickHandler(true)}>
              Ya
            </a>
          </div>

          <div className='col s12 m6 center-align margin-y-1'>
            {/* <div className='flow-text'>Tadi kamu milih ini</div> */}
            <a className='btn-large' onClick={() => props.onClickHandler(false)}>
              Tidak
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export { Question }
