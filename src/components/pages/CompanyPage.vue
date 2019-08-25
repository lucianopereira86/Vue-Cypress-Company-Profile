<template>
  <div>
    <CompanySummary />
    <div style="margin-top:30px;">
      <CompanyActivities class="inline-block" style="width:48%;" />
      <div class="inline-block" style="width:48%;float:right;">
        <CompanySimilarCompanies />
        <CompanySpendHistoryChart style="margin-top:5%;margin-bottom:5%;" />
        <CompanySpendHistory />
      </div>
    </div>
  </div>
</template>

<script>
import CompanySummary from '../utils/companypage/CompanySummary.vue'
import CompanyActivities from '../utils/companypage/CompanyActivities.vue'
import CompanySimilarCompanies from '../utils/companypage/CompanySimilarCompanies.vue'
import CompanySpendHistoryChart from '../utils/companypage/CompanySpendHistoryChart.vue'
import CompanySpendHistory from '../utils/companypage/CompanySpendHistory.vue'
export default {
  name: 'CompanyPage',
  components: {
    CompanySummary,
    CompanyActivities,
    CompanySimilarCompanies,
    CompanySpendHistoryChart,
    CompanySpendHistory
  }
}
</script>

<style>
.title {
  color: #505050;
  font-weight: bold;
  /* border-bottom: 1px solid #d4d9e3; */
  font-size: 13px;
  padding: 15px;
}
.block {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
</style>
