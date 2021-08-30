package entity

import "github.com/jinzhu/gorm"

type Book struct {
	gorm.Model
	Title string `json:"title"`
	UserId uint `json:"user_id"`
	GenreId uint `json:"genre_id"`
}
