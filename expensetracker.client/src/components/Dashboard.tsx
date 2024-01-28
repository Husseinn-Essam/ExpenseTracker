export default function Dashboard() {
  return (
    <div className="w-full mt-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
      </div>

      <div className="stats shadow mt-4 md:mt-0">
        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
      </div>

      <div className="stats shadow mt-4 lg:mt-0">
        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}
