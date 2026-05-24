import { VIEW03 } from '../../data/content';
import { DepthCalculator } from '../ui/DepthCalculator';
import { FormulaBlock } from '../ui/FormulaBlock';
import { Section } from '../ui/Section';
import { TaskCarousel } from '../ui/TaskCarousel';

export function View03Software() {
  return (
    <Section id="vista-3" viewNumber={3} title={VIEW03.title}>
      <TaskCarousel tasks={VIEW03.tasks} />

      <div className="software-tools">
        <FormulaBlock
          title={VIEW03.formula.title}
          variables={VIEW03.formula.variables}
        />
        <DepthCalculator />
      </div>
    </Section>
  );
}
