package entity

import "github.com/jinzhu/gorm"

type Genre struct {
	gorm.Model
	Title string `json:"title"`
	UserId uint `json:"user_id"`
}
