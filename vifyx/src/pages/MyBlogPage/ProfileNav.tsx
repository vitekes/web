import { useEffect, useState } from "react";

export function ProfileNav() {
  const [active, setActive] = useState<number>(1);
  useEffect(() => {
    if (active < 1 && active > 3) setActive(1);
  }, [active]);
  return (
    <nav className="profile-nav mt-10 h-16 text-center">
      <button onClick={() => setActive(1)} className={`${active === 1 ? "active" : ""}`}>
        Лента
      </button>
      <button onClick={() => setActive(2)} className={`${active === 2 ? "active" : ""}`}>
        Альбомы
      </button>
      <button onClick={() => setActive(3)} className={`${active === 3 ? "active" : ""}`}>
        Об авторе
      </button>
    </nav>
  );
}
