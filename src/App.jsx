import { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
import ScheduleDialog from './components/ScheduleDialog'
import './App.css'

function App() {
  //const [schedules, setSchedules] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [editingSchedule, setEditingSchedule] = useState(null)

  const [schedules, setSchedules] = useState(() => {
    // 初期値を LocalStorage から取得
    const saved = localStorage.getItem('schedules')
    return saved ? JSON.parse(saved) : []
  })

  // schedules が変更されたら保存
  useEffect(() => {
    localStorage.setItem('schedules', JSON.stringify(schedules))
  }, [schedules])

  // 日付クリック時
  const handleDateClick = (date) => {
    setSelectedDate(date)
    setEditingSchedule(null)
    setIsDialogOpen(true)
  }

  // スケジュール登録
  const handleAddSchedule = (schedule) => {
    const newSchedule = {
      ...schedule,
      id: Date.now(), // ユニークID
    }
    setSchedules([...schedules, newSchedule])
    setIsDialogOpen(false)
  }

  // スケジュール編集
  const handleEditSchedule = (schedule) => {
    setEditingSchedule(schedule)
    setSelectedDate(schedule.date)
    setIsDialogOpen(true)
  }

  // スケジュール更新
  const handleUpdateSchedule = (updatedSchedule) => {
    setSchedules(
      schedules.map((s) =>
        s.id === updatedSchedule.id ? updatedSchedule : s
      )
    )
    setIsDialogOpen(false)
    setEditingSchedule(null)
  }

  // スケジュール削除
  const handleDeleteSchedule = (id) => {
    if (window.confirm('このスケジュールを削除しますか？')) {
      setSchedules(schedules.filter((s) => s.id !== id))
    }
  }

  return (
    <div className="app">
      <header>
        <h1>📅 スケジュール管理</h1>
      </header>

      <Calendar
        schedules={schedules}
        onDateClick={handleDateClick}
        onScheduleClick={handleEditSchedule}
        onScheduleDelete={handleDeleteSchedule}
      />

      {isDialogOpen && (
        <ScheduleDialog
          selectedDate={selectedDate}
          schedule={editingSchedule}
          onClose={() => setIsDialogOpen(false)}
          onSave={editingSchedule ? handleUpdateSchedule : handleAddSchedule}
        />
      )}
    </div>
  )
}

export default App