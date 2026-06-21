const contractPoints = [
  {
    point: "Пункт 2.1.1",
    label: "Срок направления заявки",
    value: "Не позднее, чем за 3 (три) рабочих дня",
  },
  {
    point: "Пункт 2.1.3",
    label: "Срок изменения или аннулирования заказа",
    value: "Не позднее, чем за 2 (два) рабочих дня",
  },
  {
    point: "Пункт 2.2.5",
    label: "Срок ответа клиента на изменения",
    value: "В течение 3 (трёх) рабочих дней",
  },
  {
    point: "Пункт 2.2.6",
    label: "Срок ответа на изменения",
    value: "В течение 2 (двух) рабочих дней",
  },
  {
    point: "Пункт 3.1",
    label: "Срок полной оплаты",
    value: "Не менее чем за 1 (один) рабочий день",
  },
  {
    point: "Пункт 3.2",
    label: "Размер и срок предоплаты",
    value: "Заказчик производит предварительную оплату услуг в размере 50%",
  },
  {
    point: "Пункт 6.5",
    label: "Арбитражный суд",
    value: "г. [ваш город]",
  },
];

export default function ContractSection() {
  return (
    <section id="contract" className="bg-neutral-50 px-6 py-20 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Договор</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
          Ключевые сроки и условия
        </h2>

        <div className="space-y-6">
          {contractPoints.map((item, i) => (
            <div key={i} className="border-b border-neutral-200 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="text-xs uppercase tracking-widest text-neutral-400 min-w-[120px] pt-1">
                  {item.point}
                </span>
                <div>
                  <p className="text-neutral-500 text-sm mb-1">{item.label}</p>
                  <p className="text-neutral-900 font-medium">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="uppercase text-sm tracking-widest text-neutral-400 mb-4">
              Если заказчик — юридическое лицо
            </h3>
            <ul className="space-y-2 text-neutral-700 text-sm">
              {[
                "Полное наименование",
                "ИНН",
                "КПП",
                "Юридический адрес",
                "Фактический адрес",
                "Расчётный счёт",
                "БИК",
                "Корреспондентский счёт",
                "Банк",
                "Телефон",
                "Email",
                "Руководитель",
              ].map((field) => (
                <li key={field} className="flex gap-3">
                  <span className="text-neutral-300">—</span>
                  <span>{field}: <span className="text-neutral-400 italic">заполняется клиентом</span></span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-sm tracking-widest text-neutral-400 mb-4">
              Если заказчик — физическое лицо
            </h3>
            <p className="text-neutral-700 text-sm">
              Номер и серия паспорта, кем и когда выдан.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}