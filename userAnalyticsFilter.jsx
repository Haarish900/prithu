// import { useState, useEffect, useMemo, useRef } from "react";
// import DatePicker from "react-datepicker";
// import { AiOutlineCalendar } from "react-icons/ai";
// import "react-datepicker/dist/react-datepicker.css";

// export default function UserAnalyticsFilter({ onFilterChange, initialFilters, activeTab }) {
//   const today = useMemo(() => new Date(), []);
//   const [startDate, setStartDate] = useState(initialFilters.startDate || today);
//   const [endDate, setEndDate] = useState(initialFilters.endDate || today);
//   const [type, setType] = useState(initialFilters.type || "all");

//   const startDateRef = useRef(null);
//   const endDateRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFilterChange?.({ startDate, endDate, type });
//     }, 300);
//     return () => clearTimeout(timer);
//   }, [startDate, endDate, type]);

//   const handleReset = () => {
//     setStartDate(today);
//     setEndDate(today);
//     setType("all");
//     onFilterChange?.({ startDate: today, endDate: today, type: "all" });
//   };

//   return (
//     <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-col md:flex-row items-center gap-4">
//       {/* Start Date */}
//       <div className="flex flex-col">
//         <label className="text-sm font-medium text-gray-600">Start Date</label>
//         <div className="mt-1 flex items-center border rounded-lg px-2 py-1 cursor-pointer">
//           <DatePicker selected={startDate} onChange={setStartDate} selectsStart startDate={startDate} endDate={endDate} maxDate={endDate} dateFormat="yyyy-MM-dd" ref={startDateRef} />
//           <AiOutlineCalendar className="ml-2 text-gray-500 cursor-pointer" onClick={() => startDateRef.current?.setOpen(true)} />
//         </div>
//       </div>

//       {/* End Date */}
//       <div className="flex flex-col">
//         <label className="text-sm font-medium text-gray-600">End Date</label>
//         <div className="mt-1 flex items-center border rounded-lg px-2 py-1 cursor-pointer">
//           <DatePicker selected={endDate} onChange={setEndDate} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} dateFormat="yyyy-MM-dd" ref={endDateRef} />
//           <AiOutlineCalendar className="ml-2 text-gray-500 cursor-pointer" onClick={() => endDateRef.current?.setOpen(true)} />
//         </div>
//       </div>

//       {/* Type filter */}
//       {activeTab !== "following" && activeTab !== "interested" && activeTab !== "nonInterested" && (
//         <div className="flex flex-col">
//           <label className="text-sm font-medium text-gray-600">Type</label>
//           <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 px-3 py-2 border rounded-lg">
//             <option value="all">All</option>
//             <option value="image">Image</option>
//             <option value="video">Video</option>
//           </select>
//         </div>
//       )}

//       <div className="flex items-end">
//         <button onClick={handleReset} className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Reset</button>
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect, useMemo } from "react";
// import DatePicker from "react-datepicker";
// import { Calendar, Filter } from "lucide-react";
// import "react-datepicker/dist/react-datepicker.css";

// export default function UserAnalyticsFilter({ onFilterChange, initialFilters, activeTab }) {
//   const today = useMemo(() => new Date(), []);
//   const [startDate, setStartDate] = useState(initialFilters.startDate || today);
//   const [endDate, setEndDate] = useState(initialFilters.endDate || today);
//   const [type, setType] = useState(initialFilters.type || "all");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFilterChange?.({ startDate, endDate, type });
//     }, 300);
//     return () => clearTimeout(timer);
//   }, [startDate, endDate, type]);

//   const handleReset = () => {
//     setStartDate(today);
//     setEndDate(today);
//     setType("all");
//     onFilterChange?.({ startDate: today, endDate: today, type: "all" });
//   };

//   return (
//     <div className="bg-white rounded-lg border border-gray-200 p-5">
//       <div className="flex items-center gap-2 mb-4">
//         <Filter className="w-5 h-5 text-gray-500" />
//         <h3 className="font-medium text-gray-900">Filter Analytics</h3>
//       </div>

//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Date Range */}
//         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Start Date
//             </label>
//             <div className="relative">
//               <DatePicker
//                 selected={startDate}
//                 onChange={setStartDate}
//                 selectsStart
//                 startDate={startDate}
//                 endDate={endDate}
//                 maxDate={endDate}
//                 dateFormat="MMM dd, yyyy"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               End Date
//             </label>
//             <div className="relative">
//               <DatePicker
//                 selected={endDate}
//                 onChange={setEndDate}
//                 selectsEnd
//                 startDate={startDate}
//                 endDate={endDate}
//                 minDate={startDate}
//                 dateFormat="MMM dd, yyyy"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
//             </div>
//           </div>
//         </div>

//         {/* Type Filter */}
//         {activeTab !== "following" && activeTab !== "followers" && 
//          activeTab !== "interested" && activeTab !== "nonInterested" && (
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Content Type
//             </label>
//             <select
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="all">All Types</option>
//               <option value="image">Images</option>
//               <option value="video">Videos</option>
//               <option value="text">Text Posts</option>
//             </select>
//           </div>
//         )}

//         {/* Reset Button */}
//         <div className="flex items-end">
//           <button
//             onClick={handleReset}
//             className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             Reset Filters
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import { Calendar, X } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

export default function UserAnalyticsFilter({ onFilterChange, initialFilters, activeTab }) {
  const today = useMemo(() => new Date(), []);
  const [startDate, setStartDate] = useState(initialFilters.startDate || today);
  const [endDate, setEndDate] = useState(initialFilters.endDate || today);
  const [type, setType] = useState(initialFilters.type || "all");

  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterChange?.({ startDate, endDate, type });
    }, 300);
    return () => clearTimeout(timer);
  }, [startDate, endDate, type]);

  const handleReset = () => {
    setStartDate(today);
    setEndDate(today);
    setType("all");
    onFilterChange?.({ startDate: today, endDate: today, type: "all" });
  };

  const shouldShowTypeFilter = !["following", "followers", "interested", "nonInterested"].includes(activeTab);
  const hasCustomDates = startDate !== today || endDate !== today;

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
      {/* Left: Date Range Display */}
      <div className="flex items-center gap-2">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
          hasCustomDates ? 'bg-blue-50 border border-blue-200' : 'text-gray-600'
        }`}>
          <Calendar className={`w-4 h-4 ${hasCustomDates ? 'text-blue-600' : 'text-gray-500'}`} />
          <span className={`text-sm ${hasCustomDates ? 'text-blue-700' : 'text-gray-600'}`}>
            {startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
            {endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
          {hasCustomDates && (
            <button 
              onClick={() => {
                setStartDate(today);
                setEndDate(today);
              }}
              className="ml-1 text-blue-500 hover:text-blue-700"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Inline Date Pickers */}
        <div className="flex items-center gap-1 ml-2">
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={endDate}
            dateFormat="MM/dd"
            className="w-20 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-gray-400 text-xs">to</span>
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MM/dd"
            className="w-20 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Right: Type Filter & Clear All */}
      <div className="flex items-center gap-3">
        {shouldShowTypeFilter && (
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
          </select>
        )}
        
        {(hasCustomDates || (shouldShowTypeFilter && type !== "all")) && (
          <button
            onClick={handleReset}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}