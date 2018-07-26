import Link from "next/link";

export default () => (
  <div>
    <div>Homepage</div>
    <hr />
    <Link href="/mandataires">
      <a>Mandataires</a>
    </Link>
    <hr />
    <Link href="/preposes">
      <a>Préposés</a>
    </Link>
  </div>
);
