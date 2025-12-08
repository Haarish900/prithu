// // components/ProfileHeader.jsx
// import { useNavigate } from "react-router";
// import { FaTimes } from "react-icons/fa";
// export default function ProfileHeader({ user }) {
//     const navigate=useNavigate();
//   return (
//     <div className="relative min-h-[220px] w-full shadow rounded-b-2xl overflow-hidden">
//     <div className="relative">
//     <button
//         className="absolute top-2 right-2 z-0 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full shadow-lg transition"
//         onClick={() => navigate("/user/profile/dashboard")}
//       >
//         <FaTimes size={18} />
//       </button>
//       <img
//         src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
//         alt="Header"
//         className="w-full h-56 object-cover"
//       />
//     </div>
//       <div className="absolute left-4 md:left-12 bottom-12 flex items-end gap-5 z-10">
//         <img
//           src={user.profile?.profileAvatar || "/fallback-avatar.png"}
//           alt={user.userName}
//           className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
//         />
//         <div>
//           <div className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg">
//             {user.userName || "Unnamed"}
//           </div>
//           <div className="text-sm text-white/90">{user.profile?.location || "Unknown"}</div>
//           <div className="flex items-center gap-2 text-white/80 text-xs mt-2">
//             <span>Following: {user.following || 0}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










import { motion } from "framer-motion";

export default function ProfileHeader({ user }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg border border-gray-200"
    >
      {/* Profile Section */}
      <div className="p-6">
        <div className="flex items-start gap-5">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-white shadow-sm overflow-hidden">
              <img
                src={user.profile?.profileAvatar || "/api/placeholder/80/80"}
                alt={user.userName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border border-white ${
              user.isOnline ? 'bg-green-500' : 'bg-gray-400'
            }`} />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{user.userName}</h2>
                <p className="text-gray-600 text-sm mt-1">{user.email}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {user.role || 'User'}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    user.isBlocked 
                      ? 'bg-red-100 text-red-700' 
                      : user.isVerified 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {user.isBlocked ? 'Blocked' : user.isVerified ? 'Verified' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-6">
              <div>
                <div className="text-2xl font-semibold text-gray-900">{user.followers || 0}</div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">{user.following || 0}</div>
                <div className="text-xs text-gray-500">Following</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">{user.totalPosts || 0}</div>
                <div className="text-xs text-gray-500">Posts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        {user.profile?.bio && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Bio</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{user.profile.bio}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}