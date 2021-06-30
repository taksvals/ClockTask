(ns app.pages.item.core)

(defn item-page [match]
  (let [{:keys [path query]} (:parameters match)
        {:keys [id]} path]
    [:div
     [:h2 "Selected item " id]
     (when (:foo query)
       [:p "Optional foo query param: " (:foo query)])]))