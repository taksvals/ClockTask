(ns app.pages.clock.core
  (:require ["react-clock" :default Clock]
            [reagent.core :as r]))

(def clock (r/adapt-react-class Clock))

(def date (r/atom (js/Date.)))

(defonce time-updater (js/setInterval
                       #(reset! date (js/Date.)) 1000))


(defn clock-page []
  ;; (js/console.log clock)
  ;; (js/console.log date)
  [:div
   [clock {:value @date}]])