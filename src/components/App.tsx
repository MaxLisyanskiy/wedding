import Contacts from './contacts/contacts';
import DressCode from './dress-code/dress-code';
import Footer from './footer/footer';
import Header from './header/header';
import Invitation from './invitation/invitation';
import Main from './main/main';
import Place from './place/place';
import Program from './program/program';
import Survey from './survey/survey';
import Wishes from './wishes/wishes';

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Main />
        <Invitation />
        <Program />
        <Place />
        <DressCode />
        <Survey />
        <Wishes />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
