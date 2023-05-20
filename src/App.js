import { PostService, UserService } from './services/';
import { useEffect } from 'react';
import './App.css';

function App() {

  // useEffect(() => {
  //   PostService.getPost().then(res => console.log(res))
  //   PostService.getPostDetails(2).then(res => console.log(res))
  //   PostService.newPost({
  //     userId: 3,
  //     title: 'test',
  //     body: 'test'
  //   }).then(res => console.log(res))

  //   UserService.getUsers();
  // })

  return (
    <div className='App'>
      Merhaba
    </div>
  );
}

export default App;