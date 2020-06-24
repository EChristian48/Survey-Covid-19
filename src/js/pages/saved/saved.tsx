import * as React from 'react'
import { SavedCard } from './savedCard'
import { getDBInstance, SurveyResult } from '../../data/database'

type SavedPageState = {
  savedDatas: SurveyResult[]
}

class Saved extends React.Component<{}, SavedPageState> {
  state: SavedPageState = {
    savedDatas: [],
  }
  constructor(props: {}) {
    super(props)
    this.state = {
      savedDatas: [],
    }
  }
  componentDidMount() {
    getDBInstance()
      .then((db) => {
        return db.getAll('userResult')
      })
      .then((results) => {
        this.setState({
          savedDatas: results,
        })
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='row margin-y-1'>
          {this.state.savedDatas.map((value, index) => {
            return <SavedCard key={index} data={value} />
          })}
        </div>
      </div>
    )
  }
}

export { Saved }
