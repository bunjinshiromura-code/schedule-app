import { useState, useEffect } from 'react'

function ScheduleDialog({ selectedDate, schedule, onClose, onSave }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(selectedDate || '')
  const [startTime, setStartTime] = useState('09:00')
  const [endTime, setEndTime] = useState('10:00')
  const [description, setDescription] = useState('')

  // 編集モードの場合、既存データをセット
  useEffect(() => {
    if (schedule) {
      setTitle(schedule.title)
      setDate(schedule.date)
      setStartTime(schedule.startTime)
      setEndTime(schedule.endTime)
      setDescription(schedule.description || '')
    }
  }, [schedule])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) {
      alert('タイトルを入力してください')
      return
    }

    const scheduleData = {
      id: schedule?.id,
      title: title.trim(),
      date,
      startTime,
      endTime,
      description: description.trim(),
    }

    onSave(scheduleData)
  }

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>{schedule ? 'スケジュール編集' : '新規スケジュール'}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>タイトル *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="会議、打ち合わせ など"
              required
            />
          </div>

          <div className="form-group">
            <label>日付 *</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>開始時間 *</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>終了時間 *</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>詳細</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="詳細な内容を入力..."
              rows="3"
            />
          </div>

          <div className="dialog-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              キャンセル
            </button>
            <button type="submit" className="btn-save">
              {schedule ? '更新' : '登録'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ScheduleDialog