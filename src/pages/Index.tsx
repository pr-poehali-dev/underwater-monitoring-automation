import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "problems" },
  { id: 3, type: "transition" },
  { id: 4, type: "solution" },
  { id: 5, type: "usage" },
  { id: 6, type: "economics" },
  { id: 7, type: "conclusion" },
  { id: 9, type: "hydro" },
  { id: 10, type: "ecoeffect" },
  { id: 11, type: "roi" },
];

function SlideTitle() {
  return (
    <div className="slide-content title-slide">
      <div className="title-bg-grid" />
      <div className="title-orb title-orb-1" />
      <div className="title-orb title-orb-2" />
      <div className="title-inner">
        <div className="title-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:52,height:52}}>
              <circle cx="30" cy="30" r="28" stroke="#4db870" strokeWidth="2" fill="none"/>
              <ellipse cx="30" cy="38" rx="16" ry="8" stroke="#4db870" strokeWidth="1.5" fill="none" opacity="0.5"/>
              <path d="M14 30 Q22 18 30 22 Q38 26 46 30" stroke="#a8e063" strokeWidth="2" fill="none"/>
              <circle cx="30" cy="30" r="4" fill="#4db870"/>
              <path d="M30 26 L30 16" stroke="#4db870" strokeWidth="1.5"/>
              <path d="M26 28 L18 24" stroke="#4db870" strokeWidth="1.2" opacity="0.6"/>
              <path d="M34 28 L42 24" stroke="#4db870" strokeWidth="1.2" opacity="0.6"/>
            </svg>
          </div>
          <span className="logo-text">АкваТех</span>
        </div>
        <div className="title-divider" />
        <h1 className="title-heading">
          Интеллектуальная система<br />
          <span className="title-accent">подводного мониторинга</span>
        </h1>
        <p className="title-sub">Роботизация инспекционных работ в акваториях<br />нефтегазовой отрасли</p>
        <div className="title-meta">
          <span>Дипломный проект · 2026</span>
        </div>
      </div>
      <div className="title-waves-right">
        <div className="wave wave-1" />
        <div className="wave wave-2" />
        <div className="wave wave-3" />
      </div>
    </div>
  );
}

function SlideProblems() {
  const items = [
    { icon: "AlertTriangle", title: "Риски для персонала", desc: "Опасные условия при работе на глубине более 50 метров" },
    { icon: "DollarSign", title: "Высокая стоимость", desc: "Затраты на водолазные работы — тысячи долларов в сутки" },
    { icon: "Clock", title: "Ограничения по времени", desc: "Скорость обследования — 1–2 км в сутки" },
    { icon: "TrendingDown", title: "Низкая точность", desc: "Человеческий фактор снижает качество диагностики" },
    { icon: "EyeOff", title: "Нет постоянного мониторинга", desc: "Отсутствие непрерывного контроля состояния объектов" },
  ];
  return (
    <div className="slide-content problems-slide">
      <div className="problems-bg" />
      <div className="slide-header">
        <div className="slide-num">02</div>
        <h2 className="slide-title">Проблемы традиционных<br /><span>подводных работ</span></h2>
      </div>
      <div className="problems-grid">
        {items.map((item, i) => (
          <div key={i} className="problem-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="problem-icon">
              <Icon name={item.icon} size={26} />
            </div>
            <div>
              <div className="problem-title">{item.title}</div>
              <div className="problem-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="diver-illustration">
        <div className="water-bg" />
        <div className="pipe-h" />
        <div className="pipe-v" />
        <div className="diver-dot" />
        <div className="bubble b1" />
        <div className="bubble b2" />
        <div className="bubble b3" />
      </div>
    </div>
  );
}

function SlideTransition() {
  return (
    <div className="slide-content transition-slide">
      <div className="trans-bg" />
      <div className="slide-header slide-header-light">
        <div className="slide-num slide-num-light">03</div>
        <h2 className="slide-title slide-title-light">Переход к<br /><span>роботизации</span></h2>
      </div>
      <div className="trans-arrow-block">
        <div className="trans-col trans-col-old">
          <div className="trans-label-tag old-tag">БЫЛО</div>
          <div className="trans-item-list">
            {["Водолазные бригады","Ручной осмотр","Реактивный ремонт","Высокий риск"].map((t,i) => (
              <div key={i} className="trans-item trans-item-old">{t}</div>
            ))}
          </div>
        </div>
        <div className="trans-arrow-center">
          <div className="arrow-line" />
          <div className="arrow-head">→</div>
        </div>
        <div className="trans-col trans-col-new">
          <div className="trans-label-tag new-tag">СТАЛО</div>
          <div className="trans-item-list">
            {["Автономные дроны","AI-диагностика","Предиктивный ремонт","Нулевой риск"].map((t,i) => (
              <div key={i} className="trans-item trans-item-new">{t}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="trans-trends">
        <div className="trend-chip"><Icon name="Zap" size={14} />&nbsp;Автоматизация процессов</div>
        <div className="trend-chip"><Icon name="Brain" size={14} />&nbsp;Снижение человеческого фактора</div>
        <div className="trend-chip"><Icon name="Activity" size={14} />&nbsp;Предиктивное обслуживание</div>
      </div>
    </div>
  );
}

function SlideSolution() {
  const systems = [
    { code: "AUV", name: "Автономные подводные аппараты", role: "Обследование больших территорий", color: "#4db870" },
    { code: "ROV", name: "Дистанционно управляемые устройства", role: "Точечные ремонтные работы", color: "#a8e063" },
    { code: "USV", name: "Надводные беспилотники", role: "Ликвидация загрязнений на поверхности", color: "#2d8a4e" },
    { code: "ЦП", name: "Цифровая платформа", role: "Сбор, анализ и управление данными", color: "#1a5c2e" },
  ];
  return (
    <div className="slide-content solution-slide">
      <div className="solution-bg-lines" />
      <div className="slide-header">
        <div className="slide-num">04</div>
        <h2 className="slide-title">Предлагаемое решение:<br /><span className="accent-green">интеллектуальная система</span></h2>
      </div>
      <div className="solution-flow">
        {systems.map((s, i) => (
          <div key={i} className="solution-card" style={{ borderTopColor: s.color, animationDelay: `${i*0.1}s` }}>
            <div className="solution-code" style={{ color: s.color }}>{s.code}</div>
            <div className="solution-name">{s.name}</div>
            <div className="solution-role">{s.role}</div>
          </div>
        ))}
      </div>
      <div className="solution-diagram">
        <div className="diag-node diag-drone">ДРОН</div>
        <div className="diag-arrow">→</div>
        <div className="diag-node diag-data">ДАННЫЕ</div>
        <div className="diag-arrow">→</div>
        <div className="diag-node diag-ai">AI АНАЛИЗ</div>
        <div className="diag-arrow">→</div>
        <div className="diag-node diag-action">РЕШЕНИЕ</div>
      </div>
    </div>
  );
}

function SlideUsage() {
  const areas = [
    { icon: "Waves", label: "Трубопроводы", desc: "Подводные и береговые нефте-/газопроводы" },
    { icon: "Building", label: "Гидросооружения", desc: "Платформы, дамбы, причальные конструкции" },
    { icon: "Database", label: "Резервуары", desc: "Подводные и прибрежные ёмкости хранения" },
    { icon: "AlertCircle", label: "Зоны риска разливов", desc: "Экологически уязвимые акватории и берега" },
  ];
  return (
    <div className="slide-content usage-slide">
      <div className="usage-bg" />
      <div className="slide-header">
        <div className="slide-num">05</div>
        <h2 className="slide-title">Где используется<br /><span>система</span></h2>
      </div>
      <div className="usage-grid">
        {areas.map((a, i) => (
          <div key={i} className="usage-card" style={{ animationDelay: `${i*0.09}s` }}>
            <div className="usage-icon-wrap">
              <Icon name={a.icon} size={34} />
            </div>
            <div className="usage-label">{a.label}</div>
            <div className="usage-desc">{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideEconomics() {
  const stats = [
    { value: "−40%", label: "снижение затрат на инспекцию", icon: "TrendingDown", color: "#a8e063" },
    { value: "×2–3", label: "увеличение скорости работ", icon: "Zap", color: "#4db870" },
    { value: "−25%", label: "снижение числа аварий", icon: "ShieldCheck", color: "#a8e063" },
    { value: "90%+", label: "точность диагностики", icon: "Target", color: "#4db870" },
  ];
  return (
    <div className="slide-content economics-slide">
      <div className="eco-bg" />
      <div className="slide-header slide-header-light">
        <div className="slide-num slide-num-light">06</div>
        <h2 className="slide-title slide-title-light">Экономический<br /><span>результат внедрения</span></h2>
      </div>
      <div className="eco-stats">
        {stats.map((s, i) => (
          <div key={i} className="eco-card" style={{ animationDelay: `${i*0.09}s` }}>
            <div className="eco-icon"><Icon name={s.icon} size={22} /></div>
            <div className="eco-value" style={{ color: s.color }}>{s.value}</div>
            <div className="eco-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideConclusion() {
  const points = [
    { icon: "Shield", label: "Безопасность", desc: "Устранение рисков для персонала при подводных работах" },
    { icon: "PiggyBank", label: "Экономия", desc: "До 40% снижения операционных затрат на инспекцию" },
    { icon: "Leaf", label: "Экология", desc: "Предотвращение разливов и минимизация ущерба природе" },
    { icon: "Rocket", label: "Будущее отрасли", desc: "Цифровизация, автономность и предиктивная аналитика" },
  ];
  return (
    <div className="slide-content conclusion-slide">
      <div className="concl-bg-grid" />
      <div className="concl-orb" />
      <div className="slide-header">
        <div className="slide-num">07</div>
        <h2 className="slide-title">Почему это важно</h2>
      </div>
      <div className="concl-grid">
        {points.map((p, i) => (
          <div key={i} className="concl-card" style={{ animationDelay: `${i*0.09}s` }}>
            <div className="concl-icon"><Icon name={p.icon} size={30} /></div>
            <div className="concl-label">{p.label}</div>
            <div className="concl-desc">{p.desc}</div>
          </div>
        ))}
      </div>
      <div className="concl-footer">
        Роботизация подводных работ — ключевое направление устойчивого развития отрасли
      </div>
    </div>
  );
}

function SlideHydro() {
  const points = [
    { icon: "Waves", label: "Надводные дроны (USV)", desc: "Круглосуточное патрулирование заданных маршрутов" },
    { icon: "Droplets", label: "Контроль качества воды", desc: "Датчики pH, кислорода, нефтепродуктов в реальном времени" },
    { icon: "AlertTriangle", label: "Обнаружение загрязнений", desc: "Выявление разливов и пятен на ранней стадии" },
    { icon: "Search", label: "Поиск сбросов", desc: "Обнаружение несанкционированных источников загрязнений" },
  ];
  return (
    <div className="slide-content hydro-slide">
      <div className="hydro-bg" />
      <div className="hydro-grid-bg" />
      <div className="slide-header slide-header-light">
        <div className="slide-num slide-num-light">09</div>
        <h2 className="slide-title slide-title-light">
          Автономный мониторинг<br /><span>прибрежных зон</span>
        </h2>
      </div>
      <div className="hydro-content">
        <div className="hydro-cards">
          {points.map((p, i) => (
            <div key={i} className="hydro-card" style={{ animationDelay: `${i * 0.09}s` }}>
              <div className="hydro-card-icon"><Icon name={p.icon} size={24} /></div>
              <div>
                <div className="hydro-card-title">{p.label}</div>
                <div className="hydro-card-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="hydro-visual">
          <div className="hydro-water" />
          <div className="usv-drone">
            <div className="usv-body" />
            <div className="usv-mast" />
            <div className="usv-wave usv-w1" />
            <div className="usv-wave usv-w2" />
          </div>
          <div className="hydro-route">
            <div className="route-dot rd1" /><div className="route-dot rd2" /><div className="route-dot rd3" />
            <div className="route-line rl1" /><div className="route-line rl2" />
          </div>
          <div className="pollute-spot" />
          <div className="scan-ring" />
          <div className="hydro-tag">USV · 24/7</div>
          <div className="hydro-quote">
            «Если подводные дроны — инструмент диагностики,<br />то надводные — инструмент постоянного контроля»
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideEcoEffect() {
  const items = [
    { icon: "ShieldAlert", label: "Предотвращение ущерба", value: "до 50%", desc: "снижение экологических потерь при раннем обнаружении" },
    { icon: "FileX", label: "Снижение штрафов", value: "0–100 млн ₽", desc: "избегаемый ущерб от одного нарушения" },
    { icon: "Gauge", label: "Оптимизация водопользования", value: "−15–20%", desc: "снижение потерь воды при контроле" },
    { icon: "BarChart3", label: "ESG / отчётность", value: "+ценность", desc: "данные для прогнозирования и аудита" },
  ];
  return (
    <div className="slide-content ecoeffect-slide">
      <div className="eco2-bg" />
      <div className="slide-header">
        <div className="slide-num">10</div>
        <h2 className="slide-title">Экологический и<br /><span>экономический эффект</span></h2>
      </div>
      <div className="ecoeffect-grid">
        {items.map((item, i) => (
          <div key={i} className="ecoeffect-card" style={{ animationDelay: `${i * 0.09}s` }}>
            <div className="ecoeffect-top">
              <div className="ecoeffect-icon"><Icon name={item.icon} size={26} /></div>
              <div className="ecoeffect-value">{item.value}</div>
            </div>
            <div className="ecoeffect-label">{item.label}</div>
            <div className="ecoeffect-desc">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="ecoeffect-alert">
        <Icon name="Info" size={16} />
        <span>1 разлив нефти (1 км²) — ущерб <strong>10–100 млн ₽</strong>. Ранняя диагностика снижает его на 30–50%.</span>
      </div>
    </div>
  );
}

function SlideROI() {
  const compare = [
    { param: "Стоимость/месяц", old: "2,5–5 млн ₽", nw: "~100–200 тыс ₽", better: true },
    { param: "Персонал", old: "2–3 человека", nw: "1 оператор", better: true },
    { param: "Режим работы", old: "8–10 ч / день", nw: "24/7", better: true },
    { param: "Риски", old: "Высокие", nw: "Минимальные", better: true },
  ];
  return (
    <div className="slide-content roi-slide">
      <div className="roi-bg" />
      <div className="slide-header slide-header-light">
        <div className="slide-num slide-num-light">11</div>
        <h2 className="slide-title slide-title-light">Экономическая<br /><span>целесообразность</span></h2>
      </div>
      <div className="roi-body">
        <div className="roi-left">
          <div className="roi-table">
            <div className="roi-table-head">
              <div className="roi-th">Параметр</div>
              <div className="roi-th roi-th-old">Катер + экипаж</div>
              <div className="roi-th roi-th-new">USV-дрон</div>
            </div>
            {compare.map((row, i) => (
              <div key={i} className="roi-row" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="roi-td roi-td-param">{row.param}</div>
                <div className="roi-td roi-td-old">{row.old}</div>
                <div className="roi-td roi-td-new">{row.nw}</div>
              </div>
            ))}
          </div>
          <div className="roi-invest">
            <div className="roi-invest-title">Инвестиции в USV-систему</div>
            <div className="roi-invest-row"><span>Дрон + датчики + ПО</span><span className="roi-bold">3–8 млн ₽</span></div>
            <div className="roi-invest-row"><span>Эксплуатация / мес</span><span className="roi-bold">~100 тыс ₽</span></div>
          </div>
        </div>
        <div className="roi-right">
          <div className="roi-stat roi-stat-1">
            <div className="roi-stat-val">↓50%</div>
            <div className="roi-stat-lbl">снижение затрат</div>
          </div>
          <div className="roi-stat roi-stat-2">
            <div className="roi-stat-val">6–18 мес</div>
            <div className="roi-stat-lbl">окупаемость</div>
          </div>
          <div className="roi-stat roi-stat-3">
            <div className="roi-stat-val">↓40%</div>
            <div className="roi-stat-lbl">снижение ущерба</div>
          </div>
          <div className="roi-final">
            Экономия 2–4 млн ₽/мес<br />при инвестиции 5 млн ₽
          </div>
        </div>
      </div>
    </div>
  );
}

const slideComponents: Record<string, React.FC> = {
  title: SlideTitle,
  problems: SlideProblems,
  transition: SlideTransition,
  solution: SlideSolution,
  usage: SlideUsage,
  economics: SlideEconomics,
  conclusion: SlideConclusion,
  hydro: SlideHydro,
  ecoeffect: SlideEcoEffect,
  roi: SlideROI,
};

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number, dir: "next" | "prev" = "next") => {
    if (animating || idx < 0 || idx >= slides.length) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 320);
  }, [animating]);

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slideComponents[slides[current].type];

  return (
    <div className="presentation-root">
      <div
        className="slide-wrapper"
        style={{
          animation: animating
            ? animDir === "next"
              ? "slideOutNext 0.32s ease-in forwards"
              : "slideOutPrev 0.32s ease-in forwards"
            : "slideIn 0.32s cubic-bezier(0.22,1,0.36,1) forwards",
          pointerEvents: animating ? "none" : "auto",
        }}
      >
        <SlideComponent />
      </div>

      <div className="pres-nav">
        <button className="nav-btn" onClick={prev} disabled={current === 0}>
          <Icon name="ChevronLeft" size={18} />
        </button>
        <div className="pres-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`pres-dot ${i === current ? "dot-active" : ""}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
            />
          ))}
        </div>
        <button className="nav-btn" onClick={next} disabled={current === slides.length - 1}>
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>

      <div className="pres-counter">{current + 1} / {slides.length}</div>

      <style>{`
        * { box-sizing: border-box; }

        .presentation-root {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          font-family: 'Golos Text', sans-serif;
          background: #0d0d0d;
          position: relative;
        }

        .slide-wrapper {
          width: 100%; height: 100%;
          position: absolute; inset: 0;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOutNext {
          to { opacity: 0; transform: translateY(-18px); }
        }
        @keyframes slideOutPrev {
          to { opacity: 0; transform: translateY(18px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-content {
          width: 100%; height: 100%;
          position: relative;
          display: flex; flex-direction: column;
          overflow: hidden;
        }

        /* NAV */
        .pres-nav {
          position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 14px;
          z-index: 100;
          background: rgba(13,13,13,0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(77,184,112,0.22);
          border-radius: 40px;
          padding: 7px 16px;
        }
        .nav-btn {
          background: none; border: none; color: #4db870;
          cursor: pointer; display: flex; align-items: center;
          padding: 4px; border-radius: 50%;
          transition: background 0.2s;
        }
        .nav-btn:hover { background: rgba(77,184,112,0.15); }
        .nav-btn:disabled { opacity: 0.22; cursor: default; }
        .pres-dots { display: flex; gap: 6px; align-items: center; }
        .pres-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: rgba(255,255,255,0.22);
          border: none; cursor: pointer;
          transition: all 0.25s; padding: 0;
        }
        .pres-dot.dot-active { background: #4db870; width: 22px; border-radius: 4px; }
        .pres-counter {
          position: fixed; bottom: 28px; right: 32px;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; color: rgba(255,255,255,0.28);
          letter-spacing: 2px;
        }

        /* SHARED */
        .slide-header {
          padding: 44px 60px 0;
          display: flex; align-items: center; gap: 20px;
          position: relative; z-index: 2;
        }
        .slide-header-light {
          padding: 44px 60px 0;
          display: flex; align-items: center; gap: 20px;
          position: relative; z-index: 2;
        }
        .slide-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 64px; font-weight: 900;
          color: rgba(77,184,112,0.14);
          line-height: 1; flex-shrink: 0; user-select: none;
        }
        .slide-num-light {
          font-family: 'Montserrat', sans-serif;
          font-size: 64px; font-weight: 900;
          color: rgba(255,255,255,0.10);
          line-height: 1; flex-shrink: 0; user-select: none;
        }
        .slide-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(20px, 2.6vw, 33px);
          font-weight: 700; color: #0d0d0d; line-height: 1.2;
        }
        .slide-title span { color: #2d8a4e; }
        .slide-title-light { color: #fff !important; }
        .slide-title-light span { color: #a8e063 !important; }
        .accent-green { color: #2d8a4e; }

        /* SLIDE 1 */
        .title-slide { background: #fff; justify-content: center; }
        .title-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(77,184,112,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77,184,112,0.055) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .title-orb {
          position: absolute; border-radius: 50%;
          filter: blur(70px); pointer-events: none;
        }
        .title-orb-1 {
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(77,184,112,0.16) 0%, transparent 70%);
          right: -80px; top: -80px;
        }
        .title-orb-2 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(168,224,99,0.10) 0%, transparent 70%);
          left: 8%; bottom: 5%;
        }
        .title-inner {
          position: relative; z-index: 2;
          padding: 0 80px; max-width: 820px;
        }
        .title-logo {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 36px;
        }
        .logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 20px; font-weight: 800;
          color: #1a5c2e; letter-spacing: 1px;
        }
        .title-divider {
          width: 72px; height: 3px;
          background: linear-gradient(90deg, #4db870, #a8e063);
          border-radius: 2px; margin-bottom: 26px;
        }
        .title-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(28px, 4.2vw, 54px);
          font-weight: 800; color: #0d0d0d;
          line-height: 1.15; margin-bottom: 18px;
        }
        .title-accent { color: #1a5c2e; }
        .title-sub {
          font-size: clamp(13px, 1.5vw, 17px);
          color: #555; line-height: 1.6;
          margin-bottom: 28px;
        }
        .title-meta {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 600;
          color: #4db870; letter-spacing: 2px;
          text-transform: uppercase;
        }
        .title-waves-right {
          position: absolute; right: 60px; top: 50%;
          transform: translateY(-50%);
          width: 320px; height: 320px;
        }
        .wave {
          position: absolute; border-radius: 50%;
          border: 2px solid rgba(77,184,112,0.22);
          animation: waveAnim 4s ease-out infinite;
        }
        .wave-1 { width: 100px; height: 100px; top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: 0s; }
        .wave-2 { width: 200px; height: 200px; top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: 0.8s; }
        .wave-3 { width: 300px; height: 300px; top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: 1.6s; }
        @keyframes waveAnim {
          0% { opacity: 0.7; transform: translate(-50%,-50%) scale(0.85); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(1.15); }
        }

        /* SLIDE 2 */
        .problems-slide { background: #f7faf5; }
        .problems-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #f7faf5 60%, #e5f4da 100%);
        }
        .problems-grid {
          position: relative; z-index: 2;
          padding: 20px 60px; display: flex;
          flex-direction: column; gap: 9px; flex: 1;
        }
        .problem-card {
          display: flex; align-items: center; gap: 16px;
          background: #fff;
          border: 1px solid #e5eee0;
          border-left: 4px solid #4db870;
          border-radius: 10px; padding: 13px 20px;
          animation: fadeUp 0.4s ease both;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .problem-card:hover { box-shadow: 0 4px 18px rgba(77,184,112,0.13); transform: translateX(3px); }
        .problem-icon {
          width: 46px; height: 46px; flex-shrink: 0;
          background: linear-gradient(135deg, #e4f5d8, #c5e8aa);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #2d8a4e;
        }
        .problem-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px; font-weight: 700;
          color: #0d0d0d; margin-bottom: 2px;
        }
        .problem-desc { font-size: 12px; color: #666; }
        .diver-illustration {
          position: absolute; right: 56px; bottom: 72px;
          width: 200px; height: 160px; opacity: 0.3;
        }
        .water-bg {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent, rgba(77,184,112,0.18));
          border-radius: 10px;
        }
        .pipe-h {
          position: absolute; left: 0; right: 0; top: 58%;
          height: 7px; background: rgba(45,138,78,0.45); border-radius: 4px;
        }
        .pipe-v {
          position: absolute; left: 50%; top: 28%; bottom: 0;
          width: 7px; background: rgba(45,138,78,0.45); border-radius: 4px;
        }
        .diver-dot {
          position: absolute; left: 30%; top: 38%;
          width: 14px; height: 14px;
          background: #4db870; border-radius: 50%;
          animation: floatDot 3s ease-in-out infinite;
        }
        @keyframes floatDot {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        .bubble {
          position: absolute;
          width: 5px; height: 5px;
          background: rgba(77,184,112,0.55); border-radius: 50%;
          animation: floatBubble 2.5s ease-in infinite;
        }
        .b1 { left: 32%; top: 32%; animation-delay: 0s; }
        .b2 { left: 36%; top: 22%; animation-delay: 0.7s; }
        .b3 { left: 29%; top: 14%; animation-delay: 1.4s; }
        @keyframes floatBubble {
          0% { opacity: 0.8; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-28px); }
        }

        /* SLIDE 3 */
        .transition-slide { background: #0d1a11; }
        .trans-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgba(77,184,112,0.10) 0%, transparent 65%);
        }
        .trans-arrow-block {
          position: relative; z-index: 2;
          display: flex; align-items: center;
          padding: 20px 60px; gap: 28px; flex: 1;
        }
        .trans-col { flex: 1; display: flex; flex-direction: column; gap: 10px; }
        .trans-label-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px; font-weight: 800;
          letter-spacing: 3px; padding: 4px 12px;
          border-radius: 4px; display: inline-block; width: fit-content;
        }
        .old-tag { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.45); }
        .new-tag { background: rgba(77,184,112,0.18); color: #a8e063; }
        .trans-item-list { display: flex; flex-direction: column; gap: 8px; }
        .trans-item {
          padding: 9px 15px; border-radius: 8px;
          font-size: 14px; font-weight: 500;
        }
        .trans-item-old {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.38);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .trans-item-new {
          background: rgba(77,184,112,0.10);
          color: #a8e063;
          border: 1px solid rgba(77,184,112,0.22);
        }
        .trans-arrow-center {
          display: flex; flex-direction: column;
          align-items: center; gap: 6px; flex-shrink: 0;
        }
        .arrow-line {
          width: 55px; height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.15), #4db870);
        }
        .arrow-head { font-size: 32px; color: #4db870; line-height: 1; }
        .trans-trends {
          position: relative; z-index: 2;
          display: flex; gap: 10px;
          padding: 0 60px 44px; flex-wrap: wrap;
        }
        .trend-chip {
          display: flex; align-items: center; gap: 5px;
          background: rgba(77,184,112,0.12);
          border: 1px solid rgba(77,184,112,0.25);
          border-radius: 20px; padding: 5px 13px;
          font-size: 13px; color: #a8e063;
        }

        /* SLIDE 4 */
        .solution-slide { background: #fff; }
        .solution-bg-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(77,184,112,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77,184,112,0.045) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .solution-flow {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 14px; padding: 20px 60px;
        }
        .solution-card {
          background: #fff;
          border: 1px solid #deecd5;
          border-top: 4px solid;
          border-radius: 12px; padding: 18px 15px;
          animation: fadeUp 0.4s ease both;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .solution-card:hover { box-shadow: 0 8px 24px rgba(45,138,78,0.11); transform: translateY(-3px); }
        .solution-code {
          font-family: 'Montserrat', sans-serif;
          font-size: 26px; font-weight: 900; margin-bottom: 6px;
        }
        .solution-name {
          font-size: 13px; font-weight: 600;
          color: #0d0d0d; margin-bottom: 5px; line-height: 1.3;
        }
        .solution-role { font-size: 12px; color: #888; line-height: 1.4; }
        .solution-diagram {
          position: relative; z-index: 2;
          display: flex; align-items: center;
          justify-content: center; gap: 4px;
          padding: 0 60px 28px; flex: 1;
        }
        .diag-node {
          padding: 9px 16px; border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 0.5px;
        }
        .diag-arrow { font-size: 18px; color: #4db870; padding: 0 4px; }
        .diag-drone { background: #0d0d0d; color: #4db870; }
        .diag-data { background: #1a5c2e; color: #fff; }
        .diag-ai { background: #4db870; color: #fff; }
        .diag-action { background: #a8e063; color: #0d0d0d; }

        /* SLIDE 5 */
        .usage-slide { background: #f5faf2; }
        .usage-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #f5faf2 0%, #dff0d3 100%);
        }
        .usage-grid {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 14px; padding: 20px 60px; flex: 1;
        }
        .usage-card {
          background: #fff; border: 1px solid #d5ecc8;
          border-radius: 16px; padding: 22px;
          display: flex; flex-direction: column; gap: 9px;
          animation: fadeUp 0.4s ease both;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .usage-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(45,138,78,0.11); }
        .usage-icon-wrap {
          width: 58px; height: 58px;
          background: linear-gradient(135deg, #dff0d3, #bce09c);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: #2d8a4e;
        }
        .usage-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px; font-weight: 700; color: #0d0d0d;
        }
        .usage-desc { font-size: 13px; color: #666; line-height: 1.4; }

        /* SLIDE 6 */
        .economics-slide { background: #0a1610; }
        .eco-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 110%, rgba(77,184,112,0.14) 0%, transparent 55%);
        }
        .eco-stats {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 14px; padding: 20px 60px; flex: 1;
        }
        .eco-card {
          border: 1px solid rgba(77,184,112,0.18);
          border-radius: 16px; padding: 26px 16px;
          display: flex; flex-direction: column; align-items: center; gap: 9px;
          background: rgba(255,255,255,0.025);
          animation: fadeUp 0.4s ease both;
          transition: background 0.2s, border-color 0.2s;
        }
        .eco-card:hover { background: rgba(77,184,112,0.07); border-color: rgba(77,184,112,0.45); }
        .eco-icon {
          width: 46px; height: 46px;
          background: rgba(77,184,112,0.14);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #a8e063;
        }
        .eco-value {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(26px, 3.8vw, 46px);
          font-weight: 900; line-height: 1; text-align: center;
        }
        .eco-label { font-size: 12px; color: rgba(255,255,255,0.5); text-align: center; line-height: 1.4; }

        /* SLIDE 7 */
        .conclusion-slide { background: #fff; }
        .concl-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(77,184,112,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77,184,112,0.055) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .concl-orb {
          position: absolute; width: 550px; height: 550px;
          right: -120px; top: -80px;
          background: radial-gradient(circle, rgba(77,184,112,0.10) 0%, transparent 70%);
          border-radius: 50%; filter: blur(55px);
        }
        .concl-grid {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 13px; padding: 20px 60px; flex: 1;
        }
        .concl-card {
          background: #fff; border: 1px solid #ddecd4;
          border-radius: 16px; padding: 22px;
          display: flex; flex-direction: column; align-items: flex-start; gap: 9px;
          animation: fadeUp 0.4s ease both;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .concl-card:hover { border-color: #4db870; box-shadow: 0 8px 22px rgba(77,184,112,0.11); }
        .concl-icon {
          width: 54px; height: 54px;
          background: linear-gradient(135deg, #dff0d3, #bce09c);
          border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          color: #2d8a4e;
        }
        .concl-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 17px; font-weight: 700; color: #0d0d0d;
        }
        .concl-desc { font-size: 13px; color: #666; line-height: 1.4; }
        .concl-footer {
          position: relative; z-index: 2;
          margin: 0 60px 52px;
          background: linear-gradient(90deg, #1a5c2e, #2d8a4e);
          color: #fff; padding: 16px 26px;
          border-radius: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px; font-weight: 600;
          line-height: 1.4; text-align: center;
        }

        /* SLIDE 9 — HYDRO */
        .hydro-slide { background: #071a10; }
        .hydro-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 80% 60%, rgba(77,184,112,0.13) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 90%, rgba(0,80,160,0.10) 0%, transparent 50%);
        }
        .hydro-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(77,184,112,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77,184,112,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .hydro-content {
          position: relative; z-index: 2;
          display: flex; gap: 32px;
          padding: 16px 60px 40px;
          flex: 1;
        }
        .hydro-cards {
          flex: 1; display: flex; flex-direction: column; gap: 10px;
          justify-content: center;
        }
        .hydro-card {
          display: flex; align-items: center; gap: 14px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(77,184,112,0.18);
          border-left: 3px solid #4db870;
          border-radius: 10px; padding: 13px 18px;
          animation: fadeUp 0.4s ease both;
          transition: background 0.2s;
        }
        .hydro-card:hover { background: rgba(77,184,112,0.08); }
        .hydro-card-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          background: rgba(77,184,112,0.14);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #a8e063;
        }
        .hydro-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px; font-weight: 700;
          color: #fff; margin-bottom: 2px;
        }
        .hydro-card-desc { font-size: 12px; color: rgba(255,255,255,0.5); }
        .hydro-visual {
          width: 340px; flex-shrink: 0;
          position: relative;
          border: 1px solid rgba(77,184,112,0.15);
          border-radius: 16px;
          background: rgba(0,30,15,0.6);
          overflow: hidden;
        }
        .hydro-water {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 55%;
          background: linear-gradient(180deg, rgba(0,80,160,0.12) 0%, rgba(0,50,120,0.25) 100%);
        }
        .usv-drone {
          position: absolute; left: 50%; top: 38%;
          transform: translate(-50%, -50%);
        }
        .usv-body {
          width: 70px; height: 22px;
          background: linear-gradient(90deg, #2d8a4e, #4db870);
          border-radius: 4px 14px 14px 4px;
        }
        .usv-mast {
          position: absolute; left: 50%; top: -20px;
          transform: translateX(-50%);
          width: 3px; height: 22px;
          background: #a8e063;
        }
        .usv-wave {
          position: absolute; left: 50%; bottom: -6px;
          transform: translateX(-50%);
          height: 6px; border-radius: 0 0 50% 50%;
          background: rgba(77,184,112,0.35);
          animation: waveMove 2s ease-in-out infinite;
        }
        .usv-w1 { width: 90px; animation-delay: 0s; }
        .usv-w2 { width: 120px; animation-delay: 0.4s; opacity: 0.5; }
        @keyframes waveMove {
          0%,100% { transform: translateX(-50%) scaleX(1); }
          50% { transform: translateX(-50%) scaleX(1.15); }
        }
        .hydro-route { position: absolute; inset: 0; }
        .route-dot {
          position: absolute; width: 8px; height: 8px;
          background: #a8e063; border-radius: 50%;
        }
        .rd1 { left: 20%; top: 25%; }
        .rd2 { left: 50%; top: 40%; }
        .rd3 { left: 75%; top: 30%; }
        .route-line {
          position: absolute; height: 1px;
          background: rgba(168,224,99,0.4);
          transform-origin: left center;
        }
        .rl1 { width: 95px; left: 21%; top: 29%; transform: rotate(10deg); }
        .rl2 { width: 80px; left: 52%; top: 35%; transform: rotate(-10deg); }
        .pollute-spot {
          position: absolute; right: 15%; bottom: 28%;
          width: 42px; height: 28px;
          background: radial-gradient(circle, rgba(200,120,0,0.55) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulsePollute 2.5s ease-in-out infinite;
        }
        @keyframes pulsePollute {
          0%,100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
        .scan-ring {
          position: absolute; right: 13%; bottom: 22%;
          width: 60px; height: 60px;
          border: 2px solid rgba(168,224,99,0.5);
          border-radius: 50%;
          animation: scanRing 2.5s ease-out infinite;
        }
        @keyframes scanRing {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .hydro-tag {
          position: absolute; top: 12px; right: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 700;
          background: rgba(77,184,112,0.2);
          border: 1px solid rgba(77,184,112,0.35);
          color: #a8e063;
          padding: 3px 10px; border-radius: 20px;
          letter-spacing: 1px;
        }
        .hydro-quote {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 10px 14px;
          font-size: 11px; font-style: italic;
          color: rgba(255,255,255,0.4);
          border-top: 1px solid rgba(77,184,112,0.1);
          line-height: 1.4;
        }

        /* SLIDE 10 — ECOEFFECT */
        .ecoeffect-slide { background: #f5faf2; }
        .eco2-bg {
          position: absolute; inset: 0;
          background: linear-gradient(145deg, #f0f9e8 0%, #e0f4d0 100%);
        }
        .ecoeffect-grid {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 14px; padding: 20px 60px; flex: 1;
        }
        .ecoeffect-card {
          background: #fff;
          border: 1px solid #d0e8c0;
          border-radius: 14px; padding: 20px 16px;
          display: flex; flex-direction: column; gap: 8px;
          animation: fadeUp 0.4s ease both;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ecoeffect-card:hover { box-shadow: 0 8px 24px rgba(45,138,78,0.12); transform: translateY(-3px); }
        .ecoeffect-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 4px;
        }
        .ecoeffect-icon {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, #d8f0c4, #b5e098);
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          color: #1a5c2e;
        }
        .ecoeffect-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px; font-weight: 800;
          color: #1a5c2e; text-align: right;
        }
        .ecoeffect-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px; font-weight: 700; color: #0d0d0d;
        }
        .ecoeffect-desc { font-size: 12px; color: #666; line-height: 1.4; }
        .ecoeffect-alert {
          position: relative; z-index: 2;
          display: flex; align-items: center; gap: 10px;
          margin: 0 60px 40px;
          padding: 13px 18px;
          background: rgba(255,180,0,0.08);
          border: 1px solid rgba(255,180,0,0.3);
          border-radius: 10px;
          font-size: 13px; color: #5a4000;
        }
        .ecoeffect-alert strong { color: #b85c00; }

        /* SLIDE 11 — ROI */
        .roi-slide { background: #071510; }
        .roi-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 60% 80%, rgba(77,184,112,0.10) 0%, transparent 55%);
        }
        .roi-body {
          position: relative; z-index: 2;
          display: flex; gap: 24px;
          padding: 16px 60px 44px;
          flex: 1;
        }
        .roi-left { flex: 1.4; display: flex; flex-direction: column; gap: 14px; }
        .roi-right {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 12px;
        }
        .roi-table { border: 1px solid rgba(77,184,112,0.18); border-radius: 12px; overflow: hidden; }
        .roi-table-head {
          display: grid; grid-template-columns: 1.4fr 1fr 1fr;
          background: rgba(77,184,112,0.12);
        }
        .roi-th {
          padding: 9px 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 700;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .roi-th-old { color: rgba(255,100,100,0.7); }
        .roi-th-new { color: #a8e063; }
        .roi-row {
          display: grid; grid-template-columns: 1.4fr 1fr 1fr;
          border-top: 1px solid rgba(77,184,112,0.10);
          animation: fadeUp 0.35s ease both;
        }
        .roi-row:hover { background: rgba(77,184,112,0.05); }
        .roi-td {
          padding: 9px 12px;
          font-size: 13px;
        }
        .roi-td-param { color: rgba(255,255,255,0.7); font-weight: 500; }
        .roi-td-old { color: rgba(255,140,140,0.8); }
        .roi-td-new { color: #a8e063; font-weight: 600; }
        .roi-invest {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(77,184,112,0.15);
          border-radius: 10px; padding: 14px 16px;
          display: flex; flex-direction: column; gap: 7px;
        }
        .roi-invest-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 700;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px; text-transform: uppercase;
          margin-bottom: 4px;
        }
        .roi-invest-row {
          display: flex; justify-content: space-between;
          font-size: 13px; color: rgba(255,255,255,0.6);
        }
        .roi-bold { color: #a8e063; font-weight: 700; }
        .roi-stat {
          width: 100%; border-radius: 14px; padding: 18px;
          text-align: center;
          animation: fadeUp 0.4s ease both;
        }
        .roi-stat-1 { background: rgba(168,224,99,0.12); border: 1px solid rgba(168,224,99,0.25); animation-delay: 0s; }
        .roi-stat-2 { background: rgba(77,184,112,0.12); border: 1px solid rgba(77,184,112,0.3); animation-delay: 0.1s; }
        .roi-stat-3 { background: rgba(45,138,78,0.12); border: 1px solid rgba(45,138,78,0.3); animation-delay: 0.2s; }
        .roi-stat-val {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 900; color: #a8e063; line-height: 1;
          margin-bottom: 4px;
        }
        .roi-stat-lbl { font-size: 12px; color: rgba(255,255,255,0.5); }
        .roi-final {
          width: 100%;
          background: linear-gradient(90deg, #1a5c2e, #2d8a4e);
          color: #fff; border-radius: 12px;
          padding: 13px 16px; text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 700;
          line-height: 1.5;
          animation: fadeUp 0.4s 0.3s ease both;
        }
      `}</style>
    </div>
  );
}