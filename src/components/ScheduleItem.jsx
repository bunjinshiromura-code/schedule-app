function ScheduleItem({ schedule, onClick, onDelete }) {
  return (
    <div className="schedule-item" onClick={onClick}>
      <div className="schedule-time">
        {schedule.startTime} - {schedule.endTime}
      </div>
      <div className="schedule-title">{schedule.title}</div>
      <button
        className="delete-btn"
        onClick={onDelete}
        title="削除"
      >
        🗑️
      </button>
    </div>
  )
}

export default ScheduleItem
