export class ToDo {
    id: number;
    title :string= '';
    complete :boolean= false;
    constructor(values: object= {}) {
      Object.assign(this,values);
    }
}
let todo = new ToDo ({
  title:'waleedomega',
  complete:false
})
