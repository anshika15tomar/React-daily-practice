import React from 'react';
import UserList from './Epicmiddleware/components/UserList';
import  ProductList from './DeepShallowCopy/deepshallowcopy';
import BasicObservable from './observable/basic-observable';
import BasicSubject from './subject/basic-subject';


function App() {
  return (
    <div className="App">
      {/* <BasicSubject />
      <BasicObservable /> */}
       <UserList />
       {/* < ProductList /> */}
    </div>
  );
}


export default App;
