import { useCallback, useState, type KeyboardEvent } from 'react';
import { getImage, type ImageKey } from '../../config/images';
import { ImagePlaceholder } from './ImagePlaceholder';

export type TaskCarouselItem = {
  title: string;
  description: string;
  items?: readonly string[];
  imageKey: ImageKey;
};

type TaskCarouselProps = {
  tasks: readonly TaskCarouselItem[];
};

export function TaskCarousel({ tasks }: TaskCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = tasks.length;
  const activeTask = tasks[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, total - 1)));
    },
    [total],
  );

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  if (!activeTask) return null;

  return (
    <div
      className="task-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Tareas del software: ${activeTask.title}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="task-carousel__viewport">
        <div
          className="task-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {tasks.map((task) => (
            <article
              key={task.title}
              className="task-carousel__slide"
              aria-hidden={task.title !== activeTask.title}
            >
              <ImagePlaceholder slot={getImage(task.imageKey)} />
              <div className="task-carousel__content">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                {task.items && (
                  <ul>
                    {task.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="task-carousel__controls">
        <button
          type="button"
          className="task-carousel__btn"
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Tarea anterior"
        >
          Anterior
        </button>
        <span className="task-carousel__counter" aria-live="polite">
          {activeIndex + 1} / {total}
        </span>
        <button
          type="button"
          className="task-carousel__btn"
          onClick={goNext}
          disabled={activeIndex === total - 1}
          aria-label="Tarea siguiente"
        >
          Siguiente
        </button>
      </div>

      <div className="task-carousel__dots" role="tablist" aria-label="Seleccionar tarea">
        {tasks.map((task, index) => (
          <button
            key={task.title}
            type="button"
            role="tab"
            className={`task-carousel__dot${index === activeIndex ? ' is-active' : ''}`}
            aria-selected={index === activeIndex}
            aria-label={`${task.title} (${index + 1} de ${total})`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
