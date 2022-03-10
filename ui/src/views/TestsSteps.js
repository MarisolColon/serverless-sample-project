import React from "react"
import CRUD from "../components/CRUD/CRUD"
import TestStep from "../models/TestStep"
import TestsStepsService from "../services/testsStepsService"
import { useParams } from "react-router-dom"

const fields = TestStep.getFields()

export default function TestsSteps () {
  let { testId } = useParams()
  return (
    <main style={{ padding: "1rem 0" }}>
      <CRUD
        fields={fields}
        entityName={'testStep'}
        dataSource={async ()=> {
          const response = await TestsStepsService.getTestsSteps(testId)
          return response.data
        }}
        onDelete={(testStep) => {
          return TestsStepsService.deleteTestsSteps(testId, testStep.id)
        }}
        onCreate={(testStep) => {
          if (!testStep) throw new Error('Error, no test received on save function')
          return TestsStepsService.createTestsSteps(testId, testStep)
        }}
        onUpdate={(testStep) => {
          if (!testStep) throw new Error('Error, no test received on save function')
          return TestsStepsService.updateTestsSteps(testId, testStep.id, testStep)
        }}
      />
    </main>
  );
}