import React from "react";

const CreateExpense = props => {
  return (
    <>
      <div className="content">
        <h4 className="mb-4">Create Expense</h4>
        <div className="d-flex flex-column mb-5">
          <div className="d-flex mb-4 ">
            <button className="ml-auto btn btn-sm btn-secondary mr-2">
              Edit
            </button>
            <button className="btn btn-sm btn-secondary mr-2">Save</button>
            <button className="btn btn-sm btn-secondary mr-2">Print</button>
            <button className="btn btn-sm btn-secondary">Export</button>
          </div>
          <div className="d-flex">
            <div className="pr-3 w-25">
              <label>Beneficiary</label>
              <select className="form-control form-control-sm">
                <option>select contact</option>
              </select>
              <label className="mt-4">Address</label>
              <textarea
                className="form-control form-control-sm"
                type="text"
                placeholder="address"
              ></textarea>
            </div>
            <div className="pr-3 w-25">
              <label>Transaction Date</label>
              <input
                type="date"
                className="form-control form-control-sm"
              ></input>
              <label className="mt-4">Transaction Number</label>
              <input
                className="form-control form-control-sm"
                type="number"
                placeholder="transaction number"
              ></input>
            </div>
          </div>
        </div>
        <div className="pl-0">
          <table className="table table-sm table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Code</th>
                <th>Product</th>
                <th>Category</th>
                <th>Units</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select className="form-control form-control-sm">
                    <option>select</option>
                  </select>
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="input text"
                  ></input>
                </td>
                <td>
                  <select className="form-control form-control-sm">
                    <option>select</option>
                  </select>
                </td>
                <td>
                  <select className="form-control form-control-sm">
                    <option>select</option>
                  </select>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend input-group-prepend-sm">
                      <span class="input-group-text" id="basic-addon1">
                        Rp
                      </span>
                    </div>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      placeholder="input text"
                    ></input>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex">
            <div className="card">
              <div className="card-body">
                <input
                  className="form-control form-control-sm mb-2"
                  type="text"
                  placeholder="Memo"
                />
                <textarea
                  className="form-control form-control-sm" style={{minHeight:"6rem"}}
                  type="text"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div className="card ml-auto">
              <div className="card-body">
                <table className="table m-0 table-borderless">
                  <tbody>
                    <tr>
                      <td>Sub Total</td>
                      <td>:</td>
                      <td>Rp 1.000.000,00</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>:</td>
                      <td>Rp 1.000.000,00</td>
                    </tr>
                    <tr>
                      <td>Balance Total</td>
                      <td>:</td>
                      <td>Rp 1.000.000,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4 pb-5">
            <button className="btn btn-secondary ml-auto mr-2">Cancel</button>
            <button className="btn btn-secondary">Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateExpense;
