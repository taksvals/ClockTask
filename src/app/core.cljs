(ns app.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [fipp.edn :as fedn]

            [app.routes :refer [routes]]))

;; (def carousel (r/adapt-react-class Carousel))



(defonce match (r/atom nil))

(defn current-page []
  [:div.navbar
   [:ul.nav
    [:li [:a {:href (rfe/href :app.routes/frontpage)} "Frontpage"]]
    [:li [:a {:href (rfe/href :app.routes/about)} "About"]]
    [:li [:a {:href (rfe/href :app.routes/clock)} "Clock"]]
    [:li [:a {:href (rfe/href :app.routes/item {:id 1})} "Item 1"]]
    [:li [:a {:href (rfe/href :app.routes/item {:id 2} {:foo "bar"})} "Item 2"]]]
   (when @match
     (let [view (:view (:data @match))]
       [view @match]))
  ;;  [:pre (with-out-str (fedn/pprint @match))]
   ])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
   {:use-fragment true})
  (rdom/render [current-page]
               (.getElementById js/document "app")))


(defn main []
  (js/console.log "MAIN FN Reloaded")
  (render))