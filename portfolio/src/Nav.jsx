import React from 'react'

function Nav() {
  return (
    <>
        <nav id="navbar-example2" className="navbar navbar-expand-lg bg-body-tertiary px-3 mb-3">
            <div className='container-fluid'>
                <a className="navbar-brand" href="#">JV</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading3">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading4">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading5">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Nav
