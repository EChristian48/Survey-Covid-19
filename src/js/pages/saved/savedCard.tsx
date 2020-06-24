import * as React from 'react'
import { SurveyResult } from '../../data/database'
import { Answer } from '../../data/questions'

type SavedCardProps = {
  data: SurveyResult
}

type JawabanProps = {
  jawaban: boolean
}

function Jawaban(props: JawabanProps) {
  if (props.jawaban) {
    return <li>Iya</li>
  }
  return <li>Engga</li>
}

function SavedCard(props: SavedCardProps) {
  React.useEffect(() => {
    const elems = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elems)
  })
  return (
    <div className='col s12'>
      <div className='card'>
        <div className='card-content'>
          <div className='flow-text'>{props.data.name}</div>
          <div>Resiko: {props.data.result}</div>
          <div className='card-action'>
            <ul className='collapsible'>
              <li>
                <div className='collapsible-header'>Lihat Jawaban</div>
                <div className='collapsible-body'>
                  <ol>{props.data.answers.map((val) => <Jawaban key={val.questionIndex} jawaban={val.answer} />)}</ol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SavedCard }
