export default function ConsentSection() {
  return (
    <section id="consent" className="bg-white px-6 py-20 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Персональные данные</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
          Согласие на обработку персональных данных
        </h2>

        <p className="text-neutral-700 mb-6">
          В соответствии с требованиями Федерального закона от 27.07.2006 г. № 152-ФЗ «О
          персональных данных», для оформления договора на экскурсионное обслуживание мы обязаны
          получить письменное согласие от каждого участника мероприятия на обработку его
          персональных данных (ФИО, дата рождения, паспортные данные и т.д.).
        </p>

        <p className="text-neutral-700 mb-8">
          Во вложении к этому письму вы найдёте бланк Согласия (Приложение № 4 к договору).
          Просим вас:
        </p>

        <ol className="space-y-4 mb-12">
          {[
            "Заполнить все поля (паспортные данные, адрес регистрации, контактный телефон).",
            "Поставить подпись и расшифровку (ФИО) в двух местах документа.",
            "Направить нам скан по электронной почте.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4 text-neutral-700">
              <span className="text-neutral-400 font-bold min-w-[24px]">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="bg-neutral-50 border border-neutral-200 rounded-none p-6">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-3">
            Если клиент спрашивает: «А зачем это?»
          </p>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Это стандартное требование для всех туристических и экскурсионных компаний. Согласие
            даёт нам право хранить ваши контактные и паспортные данные в целях заключения
            договора, бронирования билетов в музеи и для связи со страховой компанией в случае
            возникновения непредвиденных ситуаций. Без этих подписей мы не имеем права юридически
            оформлять поездку. Мы гарантируем конфиденциальность ваших данных.
          </p>
        </div>
      </div>
    </section>
  );
}