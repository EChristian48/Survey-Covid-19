import * as React from 'react'
import { Title } from '../../components/title'

type UserDataFormProps = {
  onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void
}

function UserDataForm(props: UserDataFormProps) {
  return (
    <form className='container' onSubmit={props.onSubmitHandler}>
      <Title>Isi dulu data di bawah ini:</Title>
      <p className='flow-text center-align'>Datanya ga diambil kok, disimpen di client.</p>
      <div className='row'>
        <div className='col s12 input-field'>
          <input type="text" id='namaLengkap' required />
          <label htmlFor="namaLengkap">Nama Lengkap</label>
        </div>
        <div className='col s12'>
          <button type="submit" className='btn'>udah</button>
        </div>
      </div>
    </form>
  )
}

export { UserDataForm }
