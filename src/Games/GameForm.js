import React from "react";
import { useNavigate } from "react-router-dom";

export default function GameForm({ formData, handleSubmit, handleChange }) {
  let navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add A Game!</h1>
      <div className="form-group">
          <div className="formsplit">
            <div className="col-6">
                <div>
                    <label htmlFor="game_title">Game Title</label>
                    <input required name="game_title" type="text" className="form-control" value={formData.game_title} placeholder="The Legend Of React" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="game_release">Game Release Quarter</label>
                    <input required name="game_release" type="text" className="form-control" value={formData.game_release} placeholder="Q3 2022" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="game_image">Game Image Url</label>
                    <input required name="game_image" type="text" className="form-control" value={formData.game_image} placeholder="https://website/ref/photo.png" onChange={handleChange} />
                </div>
            </div>
            <div className="col-6">
                <div>
                    <label htmlFor="rating">Game Rating</label>
                    <input required name="rating" type="number" className="form-control" value={formData.rating} min={1} max={5} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="multiplayer">Multiplayer</label>
                    <select required name="multiplayer" className="form-control" value={formData.multiplayer} onChange={handleChange}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="platform">Platform</label>
                    <select required name="platform" className="form-control" value={formData.platform} onChange={handleChange}>
                        <option value="Steam">Steam</option>
                        <option value="Epic">Epic</option>
                        <option value="Origin">Origin</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Console">Console</option>
                        <option value="PC">PC</option>
                        <option value="Emulation">Emulation</option>
                    </select>
                </div>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mr-2"><span className="oi oi-check"></span>Submit</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}><span className="oi oi-x"></span>Cancel</button>
          </div>
      </div>
    </form>
  );
}