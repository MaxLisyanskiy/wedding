import Contacts from './contacts/contacts';
import Footer from './footer/footer';
import Header from './header/header';
import Invitation from './invitation/invitation';
import Main from './main/main';
import Place from './place/place';
import Program from './program/program';

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Main />
        <Invitation />
        <Program />
        <Place />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
