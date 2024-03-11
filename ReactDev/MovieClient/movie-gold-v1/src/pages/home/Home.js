import React from 'react'
import './Home.css'
import OriginAvatar from '../../avatar.png'

const Home = () => {
  return (
    <div className="profile">
      <h2>Profile information</h2>
      <img src={OriginAvatar} alt= 'user image' />
      <p>Personal details and application</p>
      <article className="profile-information">
        <hr />
        <section className="profile-information-section">
          <h3>Email</h3><p>samsnottingham4@gmail.com</p>
        </section>
        <hr />
        <section className="profile-information-section">
          <h3>Password</h3><p>*********</p>
          </section>
          <hr />
          <section className="profile-information-section">
            <h3>Fullname</h3>
            <p>Martin</p>
          </section>
          <hr />
          <section className="profile-information-section">
            <h3>Address</h3>
            <p>N/A</p></section>
            <hr />
            <section className="profile-information-section">
              <h3>Number</h3>
              <p>N/A</p></section>
              <hr />
              </article>
              
              <section className="profile-buttons">
                <button type="button" className="active-button-style">Edit profile</button>
                <button type="button" className="passive-button-style">Delete account</button>
              </section>
    </div>
  )
}

export default Home