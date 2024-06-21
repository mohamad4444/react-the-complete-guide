import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react'
import { EXAMPLES } from './data.js';
function App() {
  const [selectedTopic, setSelectedTopic] = useState('components')
  function handleClick(topic) {
    setSelectedTopic(topic);
  }
  let tabContent=(<p>Please select a topic</p>)
  if(selectedTopic){
    tabContent=(
    <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>  {/*list of buttons */}
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleClick("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;