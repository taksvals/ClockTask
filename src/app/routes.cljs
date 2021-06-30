(ns app.routes
  (:require [spec-tools.data-spec :as ds]
            [app.pages.home.core :refer [home-page]]
            [app.pages.about.core :refer [about-page]]
            [app.pages.item.core :refer [item-page]]
            [app.pages.clock.core :refer [clock-page]]))

(def routes 
  [["/"
    {:name ::frontpage
     :view home-page}]

   ["/about"
    {:name ::about
     :view about-page}]
   
   ["/clock"
    {:name ::clock
     :view clock-page}]

   ["/item/:id"
    {:name ::item
     :view item-page
     :controllers {:start ()}
     :parameters {:path {:id int?}
                  :query {(ds/opt :foo) keyword?}}}]])