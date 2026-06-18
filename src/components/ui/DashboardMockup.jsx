/**
 * Decorative fake browser/dashboard mockup for the Hero right column.
 * Built entirely from styled HTML — no images needed.
 */
export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Browser chrome */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 bg-gray-200 rounded-full h-4 max-w-[180px]" />
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center ml-auto">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 9 L6 4 L10 7" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-4">
          {/* Top metric cards row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Revenue', value: '$84.2K', up: true },
              { label: 'Users', value: '12,400', up: true },
              { label: 'Churn', value: '2.1%', up: false },
            ].map((card) => (
              <div key={card.label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-1">{card.label}</p>
                <p className="text-sm font-bold text-gray-800">{card.value}</p>
                <span className={`text-xs font-medium ${card.up ? 'text-green-500' : 'text-red-400'}`}>
                  {card.up ? '↑ 12%' : '↓ 0.3%'}
                </span>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-semibold text-gray-600">Monthly Growth</p>
              <div className="flex gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Revenue</span>
              </div>
            </div>
            {/* SVG line chart */}
            <svg viewBox="0 0 280 80" className="w-full h-16">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,65 L35,55 L70,45 L105,50 L140,32 L175,25 L210,18 L245,12 L280,8"
                stroke="#22C55E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0,65 L35,55 L70,45 L105,50 L140,32 L175,25 L210,18 L245,12 L280,8 L280,80 L0,80 Z"
                fill="url(#chartGrad)"/>
              {/* Data points */}
              {[[35,55],[70,45],[140,32],[210,18],[280,8]].map(([x,y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#22C55E" />
              ))}
            </svg>
          </div>

          {/* Bottom row: mini cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 rounded-xl p-3 border border-green-100">
              <p className="text-xs text-gray-400 mb-1">AI Tasks Automated</p>
              <p className="text-lg font-bold text-green-600">1,284</p>
              <div className="mt-2 h-1.5 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-green-500 rounded-full" />
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-2">Status</p>
              <div className="space-y-1.5">
                {['API', 'Pipeline', 'DB'].map((item, i) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-600">{item}</span>
                    <span className="ml-auto text-xs text-green-500">Live</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 -right-3 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium text-gray-700">All systems operational</span>
      </div>
    </div>
  )
}
