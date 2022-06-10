import React from 'react'

const TopBar = () => {
  return (
    <div className='bg-transparent'>
      <div className="d-flex justify-content-end px-2">
        <div className="form-check form-switch d-flex flex-column ">
          <label
            className="form-check-label fw-bold my-2 text-white"
            htmlFor="flexSwitchCheckChecked"
          >
            Music
          </label>
          <input
            className="form-check-input m-0"
            type="checkbox"
            id="flexSwitchCheckChecked"
          />
        </div>
      </div>

      <div>
          <div className="d-flex justify-content-between text-white">
              <h3 className='text-uppercase text-white'>game pin</h3>
              <h3>Space</h3>
          </div>
          <div className="d-flex justify-content-between text-warning section-bg-3">
              <h4>1234556</h4>
              <h4>Rwanda Embassy</h4>
          </div>
      </div>
    </div>
  );
}

export default TopBar