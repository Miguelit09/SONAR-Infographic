import { Header } from './components/layout/Header';
import { SideNav } from './components/layout/SideNav';
import { References } from './components/sections/References';
import { View01Waves } from './components/sections/View01Waves';
import { View02Transducer } from './components/sections/View02Transducer';
import { View03Software } from './components/sections/View03Software';
import { View04Results } from './components/sections/View04Results';
import { View05ProsCons } from './components/sections/View05ProsCons';
import { View06Examples } from './components/sections/View06Examples';
import { AUTHOR, SECTION_IDS } from './data/content';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <div className="app-shell">
      <Header />
      <SideNav activeId={activeId} />
      <main className="main-content" id="main-content">
        <View01Waves />
        <View02Transducer />
        <View03Software />
        <View04Results />
        <View05ProsCons />
        <View06Examples />
        <References />
      </main>
      <footer className="site-footer">
        <p>SONAR y ecosondas en geofísica y oceanografía</p>
        <p className="site-footer__credit">Autor: {AUTHOR.name}</p>
        <p className="site-footer__credit">
          Ficha: {AUTHOR.program} ({AUTHOR.studentId})
        </p>
      </footer>
    </div>
  );
}

export default App;
