interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <h1 className="bg-zinc-900 w-10 h-10 p-2 text-white m-2 text-center rounded-3xl">{props.completed}</h1>
  )
}