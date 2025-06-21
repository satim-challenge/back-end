const DashboardSchema = new mongoose.Schema({
  dashboardId: String
});
module.exports = mongoose.model('Dashboard', DashboardSchema);