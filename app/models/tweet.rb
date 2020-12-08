class Tweet < ApplicationRecord
  validates :content, null: false
end
