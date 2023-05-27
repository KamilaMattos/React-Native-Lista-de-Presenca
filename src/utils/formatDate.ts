import moment from "moment"
require("moment/locale/pt-br")

export function formatDate() {
  const dateNow = moment()
  const formatDate = dateNow.format("dddd, DD [de] MMMM [de] YYYY")
  return formatDate
}
