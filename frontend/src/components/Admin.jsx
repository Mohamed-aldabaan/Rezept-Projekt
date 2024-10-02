// import React from 'react'

// eslint-disable-next-line react/prop-types
const Admin = ({admin, gast}) => {
  return (
    <div className="confirmmodal">
      <div className="box">
        <p style={{'padding': '10px'}}>Möchten Sie als Admin oder als Gast weiter?</p>
        <div>
          <button onClick={admin}>Admin</button>
          <button onClick={gast}>Gast</button>
        </div>
      </div>
    </div>
  )
}

export default Admin