import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Shield,
  CreditCard,
  TrendingUp,
  Users
} from "lucide-react";

export default function UserStats({ user }) {
  const StatCard = ({ icon: Icon, label, value, subText, color = "gray" }) => (
    <div className={`p-4 border border-gray-200 rounded-lg ${
      color === 'blue' ? 'bg-blue-50 border-blue-100' : 'bg-white'
    }`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-8 h-8 rounded-md flex items-center justify-center ${
          color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
        }`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-lg font-semibold text-gray-900">{value}</div>
        </div>
      </div>
      {subText && <div className="text-xs text-gray-500 mt-1">{subText}</div>}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="space-y-4"
    >
      {/* Account Status */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h3 className="font-medium text-gray-900 mb-4">Account Status</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Account Status</div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              user.isBlocked 
                ? 'bg-red-100 text-red-700' 
                : user.isVerified 
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {user.isBlocked ? 'Blocked' : user.isVerified ? 'Verified' : 'Pending'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Subscription</div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              user.subscriptionActive 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {user.subscriptionActive ? 'Premium' : 'Free'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Online Status</div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                user.isOnline ? 'bg-green-500' : 'bg-gray-400'
              }`} />
              <span className="text-xs text-gray-700">
                {user.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Updated */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard 
          icon={Calendar}
          label="Member Since"
          value={user.createdAt ? new Date(user.createdAt).getFullYear() : 'N/A'}
          subText={user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ''}
          color="blue"
        />
        <StatCard 
          icon={Clock}
          label="Last Active"
          value={user.lastActiveAt ? new Date(user.lastActiveAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A'}
          subText={user.lastActiveAt ? new Date(user.lastActiveAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : ''}
          color="blue"
        />
        <StatCard 
          icon={TrendingUp}
          label="Growth Rate"
          value={`+${user.growthRate || 12}%`}
          subText="This month"
        />
        <StatCard 
          icon={Users}
          label="Engagement"
          value={`${user.engagementRate || 68}%`}
          subText="User engagement"
        />
      </div>

      {/* Engagement Stats */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h3 className="font-medium text-gray-900 mb-4">Engagement</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Posts Created</span>
            <span className="font-medium text-gray-900">{user.totalPosts || 0}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Total Likes</span>
            <span className="font-medium text-gray-900">{user.totalLikes || 0}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Comments Made</span>
            <span className="font-medium text-gray-900">{user.totalComments || 0}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Avg. Session</span>
            <span className="font-medium text-gray-900">{user.avgSessionTime || '0m'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}