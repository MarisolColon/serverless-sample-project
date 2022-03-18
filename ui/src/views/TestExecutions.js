import {Button, Table} from 'react-bootstrap'
import Form from "react-bootstrap/Form"
import React from "react"


function TestExecutions (props) {
  const onChangeColor = props
  return (
    <div>
      <header>
        <h4>
         Test Case: Login Validation
        </h4>
        <p>
          Steps:
        </p>
      </header>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Details</th>
          <th>Expected Result</th>
          <th>Actual Result</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Login to the app</td>
          <td>You can see the dashboard</td>
          <td>
            <textarea
              className="form-control"
              id="textArea"
            />
          </td>
          <Form.Group>
            <Form.Control
              as="select"
              custom
              onChange={onChangeColor}
            >
              <option value="empty"> </option>
              <option value="success">SUCCESS</option>
              <option value="failed">FAILED</option>
            </Form.Control>
          </Form.Group>
        </tr>
        <tr>
          <td>Click on the accounts link</td>
          <td>You can see the accounts link</td>
          <td>
            <textarea
              className="form-control"
              id="textArea"
            />
          </td>
          <Form.Group>
            <Form.Control
              as="select"
              custom
              onChange={onChangeColor}
            >
              <option value="empty"> </option>
              <option value="success">SUCCESS</option>
              <option value="failed">FAILED</option>
            </Form.Control>
          </Form.Group>
        </tr>
        <tr>
          <td>Click on the transaction icon</td>
          <td>You can see the transactions for the account</td>
          <td>
            <textarea
              className="form-control"
              id="textArea"
            />
          </td>
          <Form.Group>
            <Form.Control
              as="select"
              custom
              onChange={onChangeColor}
            >
              <option value="empty"> </option>
              <option value="success">SUCCESS</option>
              <option value="failed">FAILED</option>
            </Form.Control>
          </Form.Group>
        </tr>
        </tbody>
      </Table>
      <Button variant="success">Success</Button>{' '}
      <Button variant="danger">Failed</Button>
    </div>
  )
}

export default TestExecutions