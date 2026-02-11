function WeekView({ schedules, currentDate }) {
  const weekDays = getWeekDays(currentDate) // 月〜日の7日間を取得

  return (
    <div className="week-view">
      {weekDays.map((day) => (
        <div key={day} className="week-day">
          <h3>{formatDay(day)}</h3>
          {getSchedulesForDate(day, schedules).map((s) => (
            <ScheduleItem key={s.id} schedule={s} />
          ))}
        </div>
      ))}
    </div>
  )
}