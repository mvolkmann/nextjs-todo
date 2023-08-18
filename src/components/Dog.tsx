import { useDogContext } from '@app/context/dog-context';

export default function Dog() {
  const { breed, name } = useDogContext();
  return (
    <section>
      <p>
        Dog {name} is a {breed}.
      </p>
    </section>
  );
}
