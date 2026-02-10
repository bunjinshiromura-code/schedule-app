import { useState } from 'react'
import ScheduleItem from './ScheduleItem'

function Calendar({ schedules, onDateClick, onScheduleClick, onScheduleDelete }) {
  const [currentDate, setCurrentDate] = useState(new Date())

  // 月の初日と末日を取得
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  // 前月・次月へ移動
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  // カレンダーの日付配列を生成
  const generateCalendarDays = () => {
    const days = []
    const startDay = firstDay.getDay() // 月初の曜日（0=日曜）

    // 前月の余白
    for (let i = 0; i < startDay; i++) {
      days.push(null)
    }

    // 当月の日付
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  // 日付の文字列���（YYYY-MM-DD）
  const formatDate = (date) => {
    if (!date) return ''
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }

  // 特定の日付のスケジュールを取得
  const getSchedulesForDate = (date) => {
    const dateStr = formatDate(date)
    return schedules.filter((s) => s.date === dateStr)
  }

  const calendarDays = generateCalendarDays()
  const today = formatDate(new Date())

  return (
    <div className="calendar">
      {/* ヘッダー */}
      <div className="calendar-header">
        <button onClick={prevMonth}>◀</button>
        <h2>
          {year}年 {month + 1}月
        </h2>
        <button onClick={nextMonth}>▶</button>
      </div>

      {/* 曜日ヘッダー */}
      <div className="calendar-weekdays">
        {['日', '月', '火', '水', '木', '金', '土'].map((day, i) => (
          <div key={i} className="weekday">
            {day}
          </div>
        ))}
      </div>

      {/* 日付グリッド */}
      <div className="calendar-grid">
        {calendarDays.map((date, index) => {
          const dateStr = formatDate(date)
          const daySchedules = date ? getSchedulesForDate(date) : []
          const isToday = dateStr === today

          return (
            <div
              key={index}
              className={`calendar-day ${!date ? 'empty' : ''} ${
                isToday ? 'today' : ''
              }`}
              onClick={() => date && onDateClick(dateStr)}
            >
              {date && (
                <>
                  <div className="day-number">{date.getDate()}</div>
                  <div className="schedules">
                    {daySchedules.map((schedule) => (
                      <ScheduleItem
                        key={schedule.id}
                        schedule={schedule}
                        onClick={(e) => {
                          e.stopPropagation()
                          onScheduleClick(schedule)
                        }}
                        onDelete={(e) => {
                          e.stopPropagation()
                          onScheduleDelete(schedule.id)
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar