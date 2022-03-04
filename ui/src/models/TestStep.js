import Field from "../components/CRUD/Field";

export default class TestStep {
  static getFields () {
    return [
      new Field({
        name: 'id',
        type: 'number',
        insertDisabled: true,
        editDisabled: true
      }),
      new Field({
        name: 'details'
      }),
      new Field({
        name: 'expectedResult'
      })
    ]
  }
}