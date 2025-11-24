interface TimeSlot {
  open: string;
  foodServed: string;
}

interface OpeningHoursData {
  [key: string]: TimeSlot;
}

const openingHoursData: OpeningHoursData = {
  Monday: { open: '12:00 - 23:00', foodServed: '12:00 - 21:00' },
  Tuesday: { open: '12:00 - 23:00', foodServed: '12:00 - 21:00' },
  Wednesday: { open: '12:00 - 23:00', foodServed: '12:00 - 21:00' },
  Thursday: { open: '12:00 - 23:00', foodServed: '12:00 - 21:00' },
  Friday: { open: '12:00 - 23:00', foodServed: '12:00 - 21:30' },
  Saturday: { open: '12:00 - 23:00', foodServed: '12:00 - 21:30' },
  Sunday: { open: '12:00 - 22:00', foodServed: '12:00 - 20:00' },
};

export function OpeningHours() {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">
        Opening Hours
      </h3>
      <div className="space-y-3">
        {Object.entries(openingHoursData).map(([day, times]) => (
          <div key={day} className="flex flex-col sm:flex-row sm:justify-between border-b border-neutral-100 pb-3 last:border-b-0">
            <span className="font-medium text-neutral-900 mb-1 sm:mb-0">{day}</span>
            <div className="text-sm text-neutral-600 space-y-1">
              <div>
                <span className="font-medium">Open:</span> {times.open}
              </div>
              <div>
                <span className="font-medium">Food:</span> {times.foodServed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
