(ns app.pages.current.core
  (:require [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            [fipp.edn :as fedn]))

(defonce match (r/atom nil))

(defn current-page []
  [:div
   [:ul
    [:li [:a {:href (rfe/href ::frontpage)} "Frontpage"]]
    [:li [:a {:href (rfe/href ::about)} "About"]]
    [:li [:a {:href (rfe/href ::item {:id 1})} "Item 1"]]
    [:li [:a {:href (rfe/href ::item {:id 2} {:foo "bar"})} "Item 2"]]]
   (when @match
     (let [view (:view (:data @match))]
       [view @match]))
   [:pre (with-out-str (fedn/pprint @match))]])