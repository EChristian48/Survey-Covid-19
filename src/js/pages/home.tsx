import * as React from 'react'

// React Router
import { Link } from 'react-router-dom'

// Custom Components
import { Title } from '../components/title'

class Home extends React.Component {
  render() {
    const lol = this.props
    return (
      <div className='container'>
        <div className='row'>
          <Title>Selamat Datang!</Title>

          <div className='col s12'>
            <p className='flow-text'>
              Hai buat kamu yang udah buka ini, terima kasih ya!
              <br />
              Kenapa website ini dibuat? Ada 3 alasan utama sebenernya:
              <br />
            </p>
            <ol className='flow-text'>
              <li>Buat menuhin nilai PTS (walau udah bikin game).</li>
              <li>
                Biar masyarakat bisa paling ngga cek dirinya/tau yang harus
                dilakukan saat pandemi ini.
              </li>
              <li>Karena pada bilang:</li>
            </ol>
            <blockquote className='flow-text'>
              "Ngaco lo rick, disuruh bikin app self-check malah bikin game"
            </blockquote>
            <p className='flow-text'>
              So this is it, website Self-Check Covid-19, dibangun sepenuhnya di
              front-end menggunakan ReactJS/Materialize dan TypeScript +
              IndexedDB.
            </p>
          </div>

          <div className='row'>
            <div className='col s12 m6 center-align margin-y-1'>
              <Link to='/saved' className='btn-large waves-effect'>
                Lihat hasil survey-mu!
              </Link>
            </div>
            <div className='col s12 m6 center-align margin-y-1'>
              <Link to='/saved' className='btn-large waves-effect'>
                Lihat hasil survey-mu!
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Home }
