(ns app.pages.home.core
  (:require [reagent.core :as r]
            [clojure.string :as str]
            ["react-clock" :default Clock]))

(def clock (r/adapt-react-class Clock))

(def new-date-string (r/atom "10/11/12"))
(def date (r/atom (js/Date.)))

(defn on-click [value]
  (let [val (str/split value #"/")]
    (.setHours @date
               (first val)
               (second val)
               (last val))
    (js/console.log @date)))

;; (defonce time-updater (js/setInterval
;;                        #(reset! date (js/Date.)) 1000))

(defn home-page []
  [:div.container
   [:h2 "Set your time"]
   [clock {:value @date}]
   [:input
    {:type "text"
     :value @new-date-string
     :on-change #(reset! new-date-string (.-value (.-target %)))}]
   [:div
    [:button
     {:on-click (on-click @new-date-string)}
     "Set Time"]
    ]])