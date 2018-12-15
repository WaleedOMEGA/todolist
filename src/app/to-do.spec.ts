import {ToDo} from './to-do';
describe('ToDo',()=>{
  it('should create an instance',()=>{
    expect(new ToDo()).toBeTruthy();
  });
  it('should accept values in the constructor',()=>{
    let todo=new ToDo({
      title : 'waleed',
      complete:true
    });
    expect(todo.title).toEqual('waleed');
    expect(todo.complete).toEqual(true);
  });
});

